"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CourserofKruphix extends UnimplementedCard {
  constructor(game) {
    super(game, "Courser of Kruphix", "Born of the Gods", "BNG");
  }
}

module.exports = CourserofKruphix;
