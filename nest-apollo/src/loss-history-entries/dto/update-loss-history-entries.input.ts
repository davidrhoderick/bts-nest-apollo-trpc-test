import { InputType } from '@nestjs/graphql';
import { UpdateLossHistoryEntryInput } from './update-loss-history-entry.input';
import { CreateLossHistoryEntryInput } from './create-loss-history-entry.input';
import { LossHistoryEntry } from '../entities/loss-history-entry.entity';
import { IUpdateLossHistoryEntriesInput } from '@bts-api-tests/types';

@InputType()
export class UpdateLossHistoryEntriesInput
  implements IUpdateLossHistoryEntriesInput
{
  transactionId: string;
  delete: Array<LossHistoryEntry['id']>;
  update: Array<UpdateLossHistoryEntryInput>;
  create: Array<CreateLossHistoryEntryInput>;
}
