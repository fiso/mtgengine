"use strict";
const Constants = require ("../../../Constants");
const VensertheSojournerBase = require("../setDDI/VensertheSojourner");

class VensertheSojourner extends VensertheSojournerBase {
  constructor (game) {
    super(game, "Venser, the Sojourner", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VensertheSojourner;
