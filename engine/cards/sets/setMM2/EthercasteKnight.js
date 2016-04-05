"use strict";
const Constants = require ("../../../Constants");
const EthercasteKnightBase = require("../setARB/EthercasteKnight");

class EthercasteKnight extends EthercasteKnightBase {
  constructor(game) {
    super(game, "Ethercaste Knight", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = EthercasteKnight;
