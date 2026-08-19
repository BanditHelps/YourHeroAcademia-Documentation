import type {ReactNode} from 'react';
import clsx from 'clsx';
import QuirkIcon from '@site/src/components/QuirkIcon';
import styles from './styles.module.css';

type AbilityCardProps = {
  icon: string;
  name: string;
  slot?: string;
  mode?: string;
  stamina?: string;
  cooldown?: string;
  children?: ReactNode;
};

export default function AbilityCard({
  icon,
  name,
  slot,
  mode,
  stamina,
  cooldown,
  children,
}: AbilityCardProps): ReactNode {
  const chips = [
    slot && {label: slot},
    mode && {label: mode},
    stamina && {label: stamina},
    cooldown && {label: cooldown},
  ].filter((chip): chip is {label: string} => Boolean(chip));

  return (
    <div className={clsx(styles.card, 'ability-card')} aria-label={name}>
      <div className={styles.header}>
        <QuirkIcon src={icon} alt="" size="lg" />
        <div>
          <div className={styles.title}>{name}</div>
          {chips.length > 0 && (
            <div className={styles.chips}>
              {chips.map((chip) => (
                <span key={chip.label} className={styles.chip}>
                  {chip.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
