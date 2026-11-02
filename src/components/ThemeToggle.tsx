import { useTheme, type ThemeChoice } from '../lib/use-theme';

const LABELS: Record<ThemeChoice, string> = { system: 'System', light: 'Light', dark: 'Dark' };

/** Light / dark / system, as a radio group in the masthead's top strip. */
export default function ThemeToggle() {
  const { choice, setChoice } = useTheme();
  return (
    <span className="theme-toggle" role="group" aria-label="Colour theme">
      {(Object.keys(LABELS) as ThemeChoice[]).map((value) => (
        <button
          key={value}
          type="button"
          className="theme-option"
          aria-pressed={choice === value}
          onClick={() => setChoice(value)}
        >
          {LABELS[value]}
        </button>
      ))}
    </span>
  );
}