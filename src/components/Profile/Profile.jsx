import css from './Profile.module.css';
import { IoPeopleSharp } from 'react-icons/io5';
import { FaRegEye } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li>
          <span className={css.icon}>
            <IoPeopleSharp />
          </span>
          <span className={css.label}> Followers </span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.icon}>
            <FaRegEye />
          </span>
          <span className={css.label}> Views </span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li>
          <span className={css.icon}>
            <AiFillLike />
          </span>
          <span className={css.label}> Likes </span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
