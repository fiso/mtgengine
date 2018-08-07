"use strict";
const Constants = require ("../../../Constants");
const CrumblingNecropolisBase = require("../setE02/CrumblingNecropolis");

class CrumblingNecropolis extends CrumblingNecropolisBase {
  constructor (game) {
    super(game, "Crumbling Necropolis", "Commander 2016", "C16");
  }
}

module.exports = CrumblingNecropolis;
