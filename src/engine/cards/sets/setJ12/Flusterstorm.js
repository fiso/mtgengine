"use strict";
const Constants = require ("../../../Constants");
const FlusterstormBase = require("../setIMA/Flusterstorm");

class Flusterstorm extends FlusterstormBase {
  constructor (game) {
    super(game, "Flusterstorm", "Judge Gift Cards 2012", "J12");
  }
}

module.exports = Flusterstorm;
