"use strict";
const Constants = require ("../../../Constants");
const ApostlesBlessingBase = require("../setMM2/ApostlesBlessing");

class ApostlesBlessing extends ApostlesBlessingBase {
  constructor (game) {
    super(game, "Apostle's Blessing", "New Phyrexia", "NPH");
  }
}

module.exports = ApostlesBlessing;
