"use strict";
const Constants = require ("../../../Constants");
const FlusterstormBase = require("../setpJGP/Flusterstorm");

class Flusterstorm extends FlusterstormBase {
  constructor(game) {
    super(game, "Flusterstorm", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Flusterstorm;