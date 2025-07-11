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
  httpMethod: 'post',
  httpPath: '/pet/{petId}/uploadImage',
  operationId: 'uploadFile',
};

export const tool: Tool = {
  name: 'upload_image_pet',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nuploads an image\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    code: {\n      type: 'integer'\n    },\n    message: {\n      type: 'string'\n    },\n    type: {\n      type: 'string'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
      additionalMetadata: {
        type: 'string',
        description: 'Additional Metadata',
      },
      image: {
        type: 'string',
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
  const { petId, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.pet.uploadImage(petId, body)));
};

export default { metadata, tool, handler };
