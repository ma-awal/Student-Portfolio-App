import {
  HeartPulse, Stethoscope, Activity, Droplets, Pill, FlaskConical, Leaf, Video, Phone, Mail, MapPin, Clock, Calendar,
  CalendarCheck, Star, GraduationCap, BadgeCheck, Award, ShieldCheck, Users, Code2, Terminal, Rocket, Database, Cloud,
  ShoppingCart, BarChart3, Smartphone, Bot, Landmark, BookOpen, Globe, Github, Linkedin, Facebook, Instagram, Youtube,
  Package, PackageCheck, Truck, ShoppingBag, Gift, MessageCircle, Handshake, Building2, Briefcase, Lightbulb, Target,
  Trophy, Medal, Sparkles, ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, X, Send, Layers, Cpu, Palette, Search,
  ClipboardList, Quote, Zap, TrendingUp, Heart, Wrench, Languages, Mic, FileText, Brain, Eye, Thermometer, Syringe,
  Hospital, Microscope, Calculator, Pencil, Atom, Home, Gauge, GitBranch, Server, Lock, Coins, Store, Headphones, ThumbsUp, Flag, ExternalLink, Circle,
} from "lucide-react";

// data te icon: "heart-pulse" likhle ekhane thake khuje ney. Notun icon lagle import + ekta line add korun.
// Full list: https://lucide.dev/icons
const MAP = {
  "heart-pulse": HeartPulse, stethoscope: Stethoscope, activity: Activity, droplets: Droplets, pill: Pill,
  "flask-conical": FlaskConical, leaf: Leaf, video: Video, phone: Phone, mail: Mail, "map-pin": MapPin, clock: Clock,
  calendar: Calendar, "calendar-check": CalendarCheck, star: Star, "graduation-cap": GraduationCap, "badge-check": BadgeCheck,
  award: Award, "shield-check": ShieldCheck, users: Users, code: Code2, terminal: Terminal, rocket: Rocket, database: Database,
  cloud: Cloud, "shopping-cart": ShoppingCart, "bar-chart": BarChart3, smartphone: Smartphone, bot: Bot, landmark: Landmark,
  "book-open": BookOpen, globe: Globe, github: Github, linkedin: Linkedin, facebook: Facebook, instagram: Instagram,
  youtube: Youtube, package: Package, "package-check": PackageCheck, truck: Truck, "shopping-bag": ShoppingBag, gift: Gift,
  "message-circle": MessageCircle, handshake: Handshake, building: Building2, briefcase: Briefcase, lightbulb: Lightbulb,
  target: Target, trophy: Trophy, medal: Medal, sparkles: Sparkles, "arrow-right": ArrowRight, "arrow-up-right": ArrowUpRight,
  check: Check, "chevron-down": ChevronDown, menu: Menu, x: X, send: Send, layers: Layers, cpu: Cpu, palette: Palette,
  search: Search, clipboard: ClipboardList, quote: Quote, zap: Zap, "trending-up": TrendingUp, heart: Heart, wrench: Wrench,
  languages: Languages, mic: Mic, "file-text": FileText, brain: Brain, eye: Eye, thermometer: Thermometer, syringe: Syringe,
  hospital: Hospital, microscope: Microscope, gauge: Gauge, "git-branch": GitBranch, server: Server, lock: Lock, coins: Coins,
  calculator: Calculator, pencil: Pencil, atom: Atom, home: Home,
  store: Store, headphones: Headphones, "thumbs-up": ThumbsUp, flag: Flag, "external-link": ExternalLink,
};

export default function Icon({ name, className = "h-5 w-5", ...rest }) {
  const C = MAP[name] || Circle;
  if (!MAP[name] && process.env.NODE_ENV !== "production") console.warn(`[Icon] "${name}" naam er icon nai (Icon.jsx e add korun). Fallback circle dekhacche.`);
  return <C className={className} strokeWidth={1.8} aria-hidden="true" {...rest} />;
}
