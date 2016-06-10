"use strict";
const Constants = require ("../../../Constants");
const CemeteryReaperBase = require("../setARC/CemeteryReaper");

class CemeteryReaper extends CemeteryReaperBase {
  constructor (game) {
    super(game, "Cemetery Reaper", "Magic 2010", "M10");
  }
}

module.exports = CemeteryReaper;
