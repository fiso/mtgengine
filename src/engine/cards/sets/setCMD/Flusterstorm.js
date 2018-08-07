"use strict";
const Constants = require ("../../../Constants");
const FlusterstormBase = require("../setIMA/Flusterstorm");

class Flusterstorm extends FlusterstormBase {
  constructor (game) {
    super(game, "Flusterstorm", "Commander 2011", "CMD");
  }
}

module.exports = Flusterstorm;
