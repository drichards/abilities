describe("Ability model", function() {
    beforeEach(function() {
        this.ability = new Abilities.Models.Ability();
    });

    it("should have the correct default attributes", function() {
        expect(this.ability.get("name")).toBe(null);
        expect(this.ability.get("ability_type")).toBe("at-will");
        expect(this.ability.get("description")).toBe(null);
        expect(this.ability.get("body")).toBe(null);
        expect(this.ability.get("order")).toBe(1);
        expect(this.ability.get("column")).toBe(1);
    });
});
