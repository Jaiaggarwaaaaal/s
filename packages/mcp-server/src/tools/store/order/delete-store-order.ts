// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'eniac-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Eniac from 'eniac';

export const metadata: Metadata = {
  resource: 'store.order',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/store/order/{orderId}',
  operationId: 'deleteOrder',
};

export const tool: Tool = {
  name: 'delete_store_order',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nFor valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Eniac, args: Record<string, unknown> | undefined) => {
  const { orderId, ...body } = args as any;
  const response = await client.store.order.delete(orderId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
