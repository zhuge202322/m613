import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy py-12 px-8 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center opacity-60">
        <p className="text-xs tracking-widest text-center md:text-left">
          &copy; 2024 OKIEE. PART OF ROYAL IMPORT & EXPORT CO., LTD.
        </p>
        <div className="flex space-x-6 text-xs mt-4 md:mt-0 uppercase tracking-widest">
          <Link href="#" className="hover:text-gold transition">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-gold transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
