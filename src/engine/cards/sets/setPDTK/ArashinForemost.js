"use strict";
const Constants = require ("../../../Constants");
const ArashinForemostBase = require("../setDTK/ArashinForemost");

class ArashinForemost extends ArashinForemostBase {
  constructor (game) {
    super(game, "Arashin Foremost", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = ArashinForemost;
