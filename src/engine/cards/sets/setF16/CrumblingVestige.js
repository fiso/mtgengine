"use strict";
const Constants = require ("../../../Constants");
const CrumblingVestigeBase = require("../setOGW/CrumblingVestige");

class CrumblingVestige extends CrumblingVestigeBase {
  constructor (game) {
    super(game, "Crumbling Vestige", "Friday Night Magic 2016", "F16");
  }
}

module.exports = CrumblingVestige;
