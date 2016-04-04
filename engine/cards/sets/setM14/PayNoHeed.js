"use strict";
const Constants = require ("../../../Constants");
const PayNoHeedBase = require("../setDDL/PayNoHeed");

class PayNoHeed extends PayNoHeedBase {
  constructor(game) {
    super(game, "Pay No Heed", "Magic 2014 Core Set", "M14");
  }
}

module.exports = PayNoHeed;
