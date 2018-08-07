"use strict";
const Constants = require ("../../../Constants");
const OvereagerApprenticeBase = require("../setDVD/OvereagerApprentice");

class OvereagerApprentice extends OvereagerApprenticeBase {
  constructor (game) {
    super(game, "Overeager Apprentice", "Odyssey", "ODY");
  }
}

module.exports = OvereagerApprentice;
