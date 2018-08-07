"use strict";
const Constants = require ("../../../Constants");
const PiaandKiranNalaarBase = require("../setDDU/PiaandKiranNalaar");

class PiaandKiranNalaar extends PiaandKiranNalaarBase {
  constructor (game) {
    super(game, "Pia and Kiran Nalaar", "Magic Origins", "ORI");
  }
}

module.exports = PiaandKiranNalaar;
