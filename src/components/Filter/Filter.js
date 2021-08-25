import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import s from './Filter.module.css';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const change = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <label>
      Find contacts by name
      <input
        value={value}
        onChange={change}
        type="text"
        name="name"
        className={s.input}
      />
    </label>
  );
};

export default Filter;
