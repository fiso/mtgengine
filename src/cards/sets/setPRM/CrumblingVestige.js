"use strict";
const Constants = require ("../../../Constants");
const CrumblingVestigeBase = require("../setOGW/CrumblingVestige");

class CrumblingVestige extends CrumblingVestigeBase {
  constructor (game) {
    super(game, "Crumbling Vestige", "Magic Online Promos", "PRM");
  }
}

module.exports = CrumblingVestige;
