/**
 * @flow
 * @relayHash 4da47b371f82d624c643767f5c5fa81c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Comment_comment$ref = any;
export type GitHubAddCommentInput = {|
  subjectId: string,
  body: string,
  clientMutationId?: ?string,
|};
export type Comments_AddCommentMutationVariables = {|
  input: GitHubAddCommentInput
|};
export type Comments_AddCommentMutationResponse = {|
  +gitHub: ?{|
    +addComment: ?{|
      +commentEdge: ?{|
        +node: ?{|
          +$fragmentRefs: Comment_comment$ref
        |}
      |}
    |}
  |}
|};
export type Comments_AddCommentMutation = {|
  variables: Comments_AddCommentMutationVariables,
  response: Comments_AddCommentMutationResponse,
|};
*/


/*
mutation Comments_AddCommentMutation(
  $input: GitHubAddCommentInput!
) @persistedQueryConfiguration(freeVariables: ["input"]) {
  gitHub {
    addComment(input: $input) {
      commentEdge {
        node {
          ...Comment_comment
          id
        }
      }
    }
  }
}

fragment Comment_comment on GitHubIssueComment {
  id
  body
  createdViaEmail
  author {
    __typename
    ... on GitHubUser {
      name
      avatarUrl(size: 96)
      login
      url
    }
    ... on GitHubBot {
      avatarUrl(size: 96)
      login
      url
    }
    ... on GitHubOrganization {
      name
      avatarUrl(size: 96)
      login
      url
    }
    ... on GitHubMannequin {
      id
      login
      url
    }
  }
  createdAt
  reactionGroups {
    content
    viewerHasReacted
    users(first: 11) {
      totalCount
      nodes {
        login
        name
        isViewer
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "GitHubAddCommentInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "avatarUrl",
  "args": [
    {
      "kind": "Literal",
      "name": "size",
      "value": 96
    }
  ],
  "storageKey": "avatarUrl(size:96)"
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "login",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v7 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "Comments_AddCommentMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "gitHub",
        "storageKey": null,
        "args": null,
        "concreteType": "GitHubMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "addComment",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "GitHubAddCommentPayload",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "commentEdge",
                "storageKey": null,
                "args": null,
                "concreteType": "GitHubIssueCommentEdge",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "GitHubIssueComment",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "FragmentSpread",
                        "name": "Comment_comment",
                        "args": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Comments_AddCommentMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "gitHub",
        "storageKey": null,
        "args": null,
        "concreteType": "GitHubMutation",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "addComment",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "GitHubAddCommentPayload",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "commentEdge",
                "storageKey": null,
                "args": null,
                "concreteType": "GitHubIssueCommentEdge",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "GitHubIssueComment",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "body",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarHandle",
                        "alias": null,
                        "name": "body",
                        "args": null,
                        "handle": "registerMarkdown",
                        "key": "",
                        "filters": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "createdViaEmail",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "author",
                        "storageKey": null,
                        "args": null,
                        "concreteType": null,
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "__typename",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "GitHubUser",
                            "selections": (v7/*: any*/)
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "GitHubBot",
                            "selections": [
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/)
                            ]
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "GitHubOrganization",
                            "selections": (v7/*: any*/)
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "GitHubMannequin",
                            "selections": [
                              (v2/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/)
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "createdAt",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "reactionGroups",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "GitHubReactionGroup",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "content",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "viewerHasReacted",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "users",
                            "storageKey": "users(first:11)",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 11
                              }
                            ],
                            "concreteType": "GitHubReactingUserConnection",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "totalCount",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "nodes",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "GitHubUser",
                                "plural": true,
                                "selections": [
                                  (v5/*: any*/),
                                  (v3/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "isViewer",
                                    "args": null,
                                    "storageKey": null
                                  },
                                  (v2/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "Comments_AddCommentMutation",
    "id": "ace5098f-1a9c-4350-9add-0c7089ff8132",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ec82e09b36e02c06716a076dbd7b63c6';
module.exports = node;
