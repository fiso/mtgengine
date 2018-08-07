"use strict";
const Constants = require ("../../../Constants");
const CrumblingNecropolisBase = require("../setE02/CrumblingNecropolis");

class CrumblingNecropolis extends CrumblingNecropolisBase {
  constructor (game) {
    super(game, "Crumbling Necropolis", "Commander 2017", "C17");
  }
}

module.exports = CrumblingNecropolis;
