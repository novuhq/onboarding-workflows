import { z } from 'zod';
import { zodPayloadSchema, emailControlSchema } from './schemas';

export type PayloadSchema = z.infer<typeof zodPayloadSchema>;
export type ControlSchema = z.infer<typeof emailControlSchema>;
