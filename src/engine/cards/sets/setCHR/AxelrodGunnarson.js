"use strict";
const Constants = require ("../../../Constants");
const AxelrodGunnarsonBase = require("../setME3/AxelrodGunnarson");

class AxelrodGunnarson extends AxelrodGunnarsonBase {
  constructor (game) {
    super(game, "Axelrod Gunnarson", "Chronicles", "CHR");
  }
}

module.exports = AxelrodGunnarson;
