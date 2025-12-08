"use server";

interface GitHubRelease {
  tag_name: string;
  assets: {
    name: string;
    browser_download_url: string;
    size: number;
  }[];
}

export async function getLatestRelease() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/saddaulsiam/POS_System_Frontend/releases/latest",
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch release");
    }

    const data: GitHubRelease = await res.json();

    const windowsAsset = data.assets?.find((asset) =>
      asset.name.endsWith(".exe"),
    );

    return {
      version: data.tag_name?.replace("v", "") || "1.1.8",
      downloadUrl:
        windowsAsset?.browser_download_url || "/POS-System-Setup-1.1.8.exe",
      fileSize: windowsAsset?.size
        ? `~${Math.round(windowsAsset.size / 1024 / 1024)}MB`
        : "~100MB",
    };
  } catch (error) {
    // Fallback to default values
    return {
      version: "1.1.8",
      downloadUrl: "/POS-System-Setup-1.1.8.exe",
      fileSize: "~100MB",
    };
  }
}
