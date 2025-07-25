// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'eniac-mcp/filtering';
import { asTextContentResult } from 'eniac-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Eniac from 'eniac';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/pet',
  operationId: 'updatePet',
};

export const tool: Tool = {
  name: 'update_pet',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing pet by Id\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/pet',\n  $defs: {\n    pet: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        photoUrls: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        id: {\n          type: 'integer'\n        },\n        category: {\n          $ref: '#/$defs/category'\n        },\n        status: {\n          type: 'string',\n          description: 'pet status in the store',\n          enum: [            'available',\n            'pending',\n            'sold'\n          ]\n        },\n        tags: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'integer'\n              },\n              name: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        }\n      },\n      required: [        'name',\n        'photoUrls'\n      ]\n    },\n    category: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        name: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      photoUrls: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      id: {
        type: 'integer',
      },
      category: {
        $ref: '#/$defs/category',
      },
      status: {
        type: 'string',
        description: 'pet status in the store',
        enum: ['available', 'pending', 'sold'],
      },
      tags: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            name: {
              type: 'string',
            },
          },
          required: [],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    $defs: {
      category: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          name: {
            type: 'string',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Eniac, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pet.update(body)));
};

export default { metadata, tool, handler };
