"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PayNoHeedBase = require("../setDDL/PayNoHeed.js");

class PayNoHeed extends PayNoHeedBase {
  constructor(game) {
    super(game, "Pay No Heed", "Magic 2014 Core Set", "M14");
  }
}

module.exports = PayNoHeed;
