"use strict";
const Constants = require ("../../../Constants");
const AnnulBase = require("../setMRD/Annul");

class Annul extends AnnulBase {
  constructor(game) {
    super(game, "Annul", "Theros", "THS");
  }
}

module.exports = Annul;
