"use strict";
const Constants = require ("../../../Constants");
const AinokBondKinBase = require("../setIMA/AinokBondKin");

class AinokBondKin extends AinokBondKinBase {
  constructor (game) {
    super(game, "Ainok Bond-Kin", "Khans of Tarkir", "KTK");
  }
}

module.exports = AinokBondKin;
