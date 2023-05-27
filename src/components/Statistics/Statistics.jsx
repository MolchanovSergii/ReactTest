import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaRegThumbsUp size={30} />,
  <MdPeople size={30} />,
  <MdOutlineProductionQuantityLimits size={30} />,
  <GiTreeDoor size={30} />,
];

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {stats.map(({ id, title, total }, idx) => {
          return (
            <StatisticItem
              key={id}
              icon={icons[idx]}
              title={title}
              total={total}
            />
          );
        })}
      </StatisticsList>
    </>
  );
};
