"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VensertheSojournerBase = require("../setDDI/VensertheSojourner.js");

class VensertheSojourner extends VensertheSojournerBase {
  constructor(game) {
    super(game, "Venser, the Sojourner", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VensertheSojourner;
