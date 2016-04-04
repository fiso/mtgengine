"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AqueousForm extends UnimplementedCard {
  constructor(game) {
    super(game, "Aqueous Form", "Theros", "THS");
  }
}

module.exports = AqueousForm;
