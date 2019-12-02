import React from "react";

import { Provider } from "react-redux";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import configureStore from "redux-mock-store";

import { initialState as eosInitialState } from "../../reducers/eosReducer";
const middlewares = [...getDefaultMiddleware()];
const mockStore = configureStore(middlewares);

import { render, fireEvent, waitForElement } from "@testing-library/react";
import Block from "./Block";

it("displays the block's info", async () => {
  const store = mockStore({
    eos: {
      ...eosInitialState,
      blocks: {
        92941162: {
          timestamp: "2019-12-02T17:57:00.000",
          producer: "eosdotwikibp",
          confirmed: 237,
          previous:
            "058a2b693c6a9b9b4af9cd9eed6a41d7971636287ac73baff1abb0e2f4e55493",
          transaction_mroot:
            "2701884d3e080f4685483ece88519a18db00db3661c49392c1def972e8d7ce7d",
          action_mroot:
            "858981a6bbd2c62779ccb75566a53531353bb1258c5dd86056aa64d556861202",
          schedule_version: 1540,
          new_producers: null,
          header_extensions: [],
          producer_signature:
            "SIG_K1_K5KZQ61i4LdJkZdQoZJiLQ8HdizBb4yjk5HZYjZPZzBQqbkatvRKtkK2iRzCcwujBoAPXN2tqiq5Wwugc2eMN3ammq8XGh",
          transactions: [
            {
              status: "executed",
              cpu_usage_us: 630,
              net_usage_words: 20,
              trx: {
                id:
                  "f73df794675b31996470948b279878c417899fe549b260bdd54c7dfe5324213c",
                signatures: [
                  "SIG_K1_KaUos9o8LfMeY2pRVZE5buDiUMnTsdJGNb8K6ecmeau3yZsJK3qEFSKbSQv9QcyAFbteZVErbknjBKuwdd3EeuDEGpR4a8",
                  "SIG_K1_KhBEowBD3UgqLzRBnA2mx9BMN5gcVLGGmtTQxhcfL7n71xCVFGYGfWAH5UNEfxWuurRUeWuCB1BRJ46EMFZVoodBJp1D9B"
                ],
                compression: "none",
                packed_context_free_data: "",
                context_free_data: [],
                packed_trx:
                  "9451e55d1e2a9d085eef0000000001a026a59a4d8331550000c846aaaca24a0210590b4ca4a1094a00000000a8ed3232304d9ddaabe88c8600000000a8ed323225304d9ddaabe88c8605741e0000751e0000761e0000531e0000561e0000612b8a0560c43c9400",
                transaction: {
                  expiration: "2019-12-02T18:01:56",
                  ref_block_num: 10782,
                  ref_block_prefix: 4015917213,
                  max_net_usage_words: 0,
                  max_cpu_usage_ms: 0,
                  delay_sec: 0,
                  context_free_actions: [],
                  actions: [
                    {
                      account: "eossanguoone",
                      name: "deletemat",
                      authorization: [
                        {
                          actor: "dc4u3d2g1hgl",
                          permission: "active"
                        },
                        {
                          actor: "kuaileyunpan",
                          permission: "active"
                        }
                      ],
                      data: {
                        from: "kuaileyunpan",
                        mat_ids: [7796, 7797, 7798, 7763, 7766],
                        block: 92941153,
                        checksum: 2487010400
                      },
                      hex_data:
                        "304d9ddaabe88c8605741e0000751e0000761e0000531e0000561e0000612b8a0560c43c94"
                    }
                  ],
                  transaction_extensions: []
                }
              }
            }
          ],
          block_extensions: [],
          id:
            "058a2b6abd8dd4e820ab98853014143c14879dfa5793aa6ccce6f4f75529decd",
          block_num: 92941162,
          ref_block_prefix: 2241375008
        }
      }
    }
  });
  const { getByTestId } = render(
    <Provider store={store}>
      <Block blockId={92941162} />
    </Provider>
  );
  const timestampElement = await waitForElement(() => getByTestId("timestamp"));
  const blockhashElement = await waitForElement(() => getByTestId("blockhash"));
  const actioncountElement = await waitForElement(() =>
    getByTestId("actioncount")
  );
  expect(timestampElement).toBeInTheDocument();
  expect(blockhashElement).toBeInTheDocument();
  expect(actioncountElement).toBeInTheDocument();
});
