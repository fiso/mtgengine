"use strict";
const Constants = require ("../../../Constants");
const TreeofRedemptionBase = require("../setA25/TreeofRedemption");

class TreeofRedemption extends TreeofRedemptionBase {
  constructor (game) {
    super(game, "Tree of Redemption", "Innistrad", "ISD");
  }
}

module.exports = TreeofRedemption;
