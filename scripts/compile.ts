// Automatically load environment variables from a `.env` file
import "@std/dotenv/load";

// $SANNY --compile <input file path> [output file path]

const sannyPath = Deno.env.get("SANNY");

if (!sannyPath) {
  console.error("SANNY environment variable not set");
  Deno.exit(1);
}

const { success, stderr } = await new Deno.Command(sannyPath, { args: ["--compile", "main.txt"] }).output();

if (!success) {
  console.error("Compilation failed!");
  console.error(stderr);
  Deno.exit(1);
}
