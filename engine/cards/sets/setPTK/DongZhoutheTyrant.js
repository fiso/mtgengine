"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DongZhoutheTyrantBase = require("../setME3/DongZhoutheTyrant.js");

class DongZhoutheTyrant extends DongZhoutheTyrantBase {
  constructor(game) {
    super(game, "Dong Zhou, the Tyrant", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = DongZhoutheTyrant;
