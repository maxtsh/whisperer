import Whisperer from "./modules";

const Whisper = new Whisperer();

(globalThis as any).Whisperer = Whisper;
