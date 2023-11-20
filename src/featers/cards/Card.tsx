import { useAppSelector } from '../../redux/hooks';
import { getInitialSettingsValue } from '../../redux/settingsSlice';

type Props = React.PropsWithChildren;

export const Card: React.FC<Props> = ({ children }) => {
  const color = useAppSelector(getInitialSettingsValue);
  return <div className={`card card--${color}`}>{children}</div>;
};

// export const Card = ({ children }: Props): React.ReactElement => {
//   return <div className="card card--dark">{children}</div>;
// };

// export const Card = ({ children }: Props): JSX.Element => {
//   return <div className="card card--dark">{children}</div>;
// };
