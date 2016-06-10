"use strict";
const Constants = require ("../../../Constants");
const PayNoHeedBase = require("../setDDL/PayNoHeed");

class PayNoHeed extends PayNoHeedBase {
  constructor (game) {
    super(game, "Pay No Heed", "Torment", "TOR");
  }
}

module.exports = PayNoHeed;
