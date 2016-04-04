"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RecoupBase = require("../setDDK/Recoup.js");

class Recoup extends RecoupBase {
  constructor(game) {
    super(game, "Recoup", "Odyssey", "ODY");
  }
}

module.exports = Recoup;
