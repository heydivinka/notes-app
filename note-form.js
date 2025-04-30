class NoteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form id="note-form">
                <input type="text" id="title" placeholder="Your Title here" required>
                <textarea id="body" placeholder="Write your notes here" required></textarea>
                <select id="category">
                    <option value="Umum">🌎〡Umum</option>
                    <option value="Pekerjaan">💰〡Pekerjaan</option>
                    <option value="Pribadi">Pribadi</option>
                    <option value="Ide">Ide</option>
                </select>
                <button type="submit">Add notes</button>
            </form>
        `;

        this.querySelector("#note-form").addEventListener("submit", (e) => {
            e.preventDefault();
            const title = this.querySelector("#title").value;
            const body = this.querySelector("#body").value;
            const category = this.querySelector("#category").value;

            const event = new CustomEvent("note-added", {
                detail: { title, body, category },
                bubbles: true,
            });

            this.dispatchEvent(event);

            this.querySelector("#title").value = "";
            this.querySelector("#body").value = "";
        });
    }
}

customElements.define("note-form", NoteForm);
