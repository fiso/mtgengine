"use strict";
const Constants = require ("../../../Constants");
const CrumblingNecropolisBase = require("../setE02/CrumblingNecropolis");

class CrumblingNecropolis extends CrumblingNecropolisBase {
  constructor (game) {
    super(game, "Crumbling Necropolis", "Modern Masters 2017", "MM3");
  }
}

module.exports = CrumblingNecropolis;
