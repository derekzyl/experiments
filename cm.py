import tkinter
from tkinter import ttk


def calculate(*args):
    try:
        value = float(feet.get())
        meters.set(int(0.3048 * value * 10000.0 + 0.5) / 10000.0)  # type: ignore
    except ValueError:
        pass


root = tkinter.Tk()
root.title("Feet to Meters")

mainframe = ttk.Frame(root, padding="3 3 12 12")
mainframe.grid(column=0, row=0, sticky=(N, W, E, S))  # type: ignore
root.columnconfigure(0, weight=1)
root.rowconfigure(0, weight=1)

feet = tkinter.StringVar()
feet_entry = ttk.Entry(mainframe, width=7, textvariable=feet)
feet_entry.grid(column=2, row=1, sticky=(W, E))  # type: ignore

meters = tkinter.StringVar()
ttk.Label(mainframe, textvariable=meters).grid(column=2, row=2, sticky=(W, E))  # type: ignore

ttk.Button(mainframe, text="Calculate", command=calculate).grid(
    column=3, row=3, sticky=tkinter.W
)

ttk.Label(mainframe, text="feet").grid(column=3, row=1, sticky=tkinter.W)
ttk.Label(mainframe, text="is equivalent to").grid(column=1, row=2, sticky=tkinter.E)
ttk.Label(mainframe, text="meters").grid(column=3, row=2, sticky=tkinter.W)

for child in mainframe.winfo_children():
    child.grid_configure(padx=5, pady=5)

feet_entry.focus()
root.bind("<Return>", calculate)

root.mainloop()
