import { ITarefa } from '../../../Types/tarefa';
import style from './Item.module.scss';
interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}
export default function Item({
    tarefa,
    tempo,
    selecionado,
    completo,
    id,
    selecionaTarefa
}: Props) {
    return (
        <li
            className={`${style.item} ${selecionado ?
                style.itemSelecionado : ''} ${completo ? style.itemCompletado :
                    ''}`}
            onClick={() => !completo && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completo,
                    id
                }
            )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completo && <span className={style.concluido} aria-label="tarefa completa"></span>}
        </li>
    )
}