{
  description = "Quinton's personal blog built with Eleventy and Tailwind";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            bun
            neovim
            git
          ];

          shellHook = ''
            echo "🚀 Welcome to Quinton's Blog Development Environment"
            echo ""
            echo "Available commands:"
            echo "  bun run dev       - Start development server"
            echo "  bun run build     - Build the site"
            echo "  bun run new       - Create a new post"
            echo ""
            echo "Bun version: $(bun --version)"
          '';
        };
      }
    );
}
