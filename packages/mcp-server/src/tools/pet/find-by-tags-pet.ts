// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'eniac-mcp/filtering';
import { asTextContentResult } from 'eniac-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Eniac from 'eniac';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/pet/findByTags',
  operationId: 'findPetsByTags',
};

export const tool: Tool = {
  name: 'find_by_tags_pet',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMultiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/pet'\n  },\n  $defs: {\n    pet: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        photoUrls: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        id: {\n          type: 'integer'\n        },\n        category: {\n          $ref: '#/$defs/category'\n        },\n        status: {\n          type: 'string',\n          description: 'pet status in the store',\n          enum: [            'available',\n            'pending',\n            'sold'\n          ]\n        },\n        tags: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        }\n      },\n      required: [        'name',\n        'photoUrls'\n      ]\n    },\n    category: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      tags: {
        type: 'array',
        description: 'Tags to filter by',
        items: {
          type: 'string',
        },
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pet.findByTags(body)));
};

export default { metadata, tool, handler };
