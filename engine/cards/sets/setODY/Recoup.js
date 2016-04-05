"use strict";
const Constants = require ("../../../Constants");
const RecoupBase = require("../setDDK/Recoup");

class Recoup extends RecoupBase {
  constructor(game) {
    super(game, "Recoup", "Odyssey", "ODY");
  }
}

module.exports = Recoup;
