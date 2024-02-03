import Board from '../../models/Board.js';
import { HttpError } from '../../helpers/index.js';
import { errorStatus, successStatus } from '../../const/index.js';

// ============================================================

export const deleteBoard = async (req, res) => {
  const { id } = req.params;
  const result = await Board.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(errorStatus.NOT_FOUND_BOARD);
  }
  res.json({ ...successStatus.DELETED_BOARD, data: result });
};
