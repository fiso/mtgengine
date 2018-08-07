"use strict";
const Constants = require ("../../../Constants");
const BrimstoneVolleyBase = require("../setCNS/BrimstoneVolley");

class BrimstoneVolley extends BrimstoneVolleyBase {
  constructor (game) {
    super(game, "Brimstone Volley", "Innistrad", "ISD");
  }
}

module.exports = BrimstoneVolley;
