"use strict";
const Constants = require ("../../../Constants");
const DreadCacodemonBase = require("../setCMA/DreadCacodemon");

class DreadCacodemon extends DreadCacodemonBase {
  constructor (game) {
    super(game, "Dread Cacodemon", "Commander 2011", "CMD");
  }
}

module.exports = DreadCacodemon;
